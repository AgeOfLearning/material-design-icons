import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudOffElement
 * @class IconRoundCloudOffElement
 * @extends {AoflElement}
 */
class IconRoundCloudOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudOffElement.is, IconRoundCloudOffElement);

export default IconRoundCloudOffElement;
