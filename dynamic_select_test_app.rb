#!/usr/bin/env ruby
require 'pp'
require 'webrick'
include WEBrick

class PostServlet < HTTPServlet::AbstractServlet
  def do_GET(req, res)
    res.set_redirect(WEBrick::HTTPStatus::TemporaryRedirect,"/")
  end

  def do_POST(req, res)
    res['Content-Type'] = "text/plain; charset=utf-8;"
    res.body = "POST query parameters\n\n" + req.query.pretty_inspect
  end
end

s = WEBrick::HTTPServer.new({
  :Port => 8080,
  :DocumentRoot => File.dirname($0)
})

s.mount("/post", PostServlet)

Signal.trap('INT') { s.shutdown }
s.start


#system("open http://127.0.0.1:8080/")
