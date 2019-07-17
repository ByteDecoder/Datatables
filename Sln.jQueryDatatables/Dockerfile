FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base

WORKDIR /app

COPY ./jQueryDatatables/publish .

ENTRYPOINT ["dotnet", "jQueryDatatables.dll"]

