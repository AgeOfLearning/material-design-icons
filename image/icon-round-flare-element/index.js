import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlareElement
 * @class IconRoundFlareElement
 * @extends {AoflElement}
 */
class IconRoundFlareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlareElement.is, IconRoundFlareElement);

export default IconRoundFlareElement;
