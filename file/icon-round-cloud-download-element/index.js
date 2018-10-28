import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudDownloadElement
 * @class IconRoundCloudDownloadElement
 * @extends {AoflElement}
 */
class IconRoundCloudDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudDownloadElement.is, IconRoundCloudDownloadElement);

export default IconRoundCloudDownloadElement;
