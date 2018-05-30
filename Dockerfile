FROM fedstudio

RUN npm config set registry "https://npm-proxy.fury.io/pGgiy9647Jq8aeBswH5H/fedstudio/" \
	&& npm config set ca ""
	
ADD / /

RUN npm i --unsafe-perm

ENTRYPOINT ["npm"]

CMD ["start"]

EXPOSE 8002