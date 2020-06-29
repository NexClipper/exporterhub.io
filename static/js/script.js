$(document).ready(function () {
  $('#repos-box').html('');
  getRepo();
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function () {
    registExporter()
  })
})

function validURL(exporterURL) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1, 3}\\.){3}\\d{1, 3}))' + // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i');
  return pattern.test(exporterURL);
}



function registExporter() {
  let exporterGithubUrl = $('#exporterGithubUrl').val();
  let exporterComment = $('#exporterComment').val();
  if (exporterGithubUrl == '') {
    alert('Github URL을 입력하세요');
    $('#exporterGithubUrl').focus();
    return;
  } else if (validURL(exporterGithubUrl) != true) {
    alert('올바른 URL 형식을 입력해주세요');
    $('#exporterGithubUrl').focus();
    // parsing 해서 api 형태로 바꿈, 백엔드에서 구현하는게 더 맞을것 같음.
    return;
  } else if (exporterComment == '') {
    alert('Comment를 입력해주세요');
    $('#exporterComment').focus();
    return;
  }

  $.ajax({
    type: "GET",
    url: exporterGithubUrl,
    data: {},
    success: function (response) {
      let repoName = response['name']
      let repoFullName = response['full_name']
      let repoUrl = response['html_url']
      let repoDescription = response['description']
      let starred = response['stargazers_count']
      // 화면에 현재 입력된 exporter 정보를 보여줘야함
      console.log(starred);
    }
  })

  $.ajax({
    type: "POST",
    url: "/addRepo",
    data: { exporterGithubUrl: exporterGithubUrl, exporterComment: exporterComment },
    success: function (response) {
      if (response['result'] == 'success') {
        alert(response['msg']);
        window.location.reload();
      }
    }
  })
}

function getRepo() {
  $('#repos-box').html('');
  $.ajax({
    type: "GET",
    url: "/getRepo",
    data: {},
    success: function (response) {
      if (response['result'] == 'success') {
        let repos = response['repos'];
        for (let i = 0; i < repos.length; i++) {
          make_list(repos[i]['exporterContent']['html_url'], repos[i]['exporterComment']);
        }
        // alert('success');
      } else {
        alert('정보를 받아오지 못함');
      }
    }
  })
}

function make_list(exporterGithubUrl, exporterComment) {
  let temp_html = `<tr>
    <td>${exporterGithubUrl}</td>
    <td>${exporterComment}</td>
  </tr>`;
  $('#repos-box').append(temp_html);
}