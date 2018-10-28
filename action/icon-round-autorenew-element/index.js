import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAutorenewElement
 * @class IconRoundAutorenewElement
 * @extends {AoflElement}
 */
class IconRoundAutorenewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAutorenewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-autorenew';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAutorenewElement.is, IconRoundAutorenewElement);

export default IconRoundAutorenewElement;
