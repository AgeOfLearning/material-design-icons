import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudElement
 * @class IconRoundCloudElement
 * @extends {AoflElement}
 */
class IconRoundCloudElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudElement.is, IconRoundCloudElement);

export default IconRoundCloudElement;
