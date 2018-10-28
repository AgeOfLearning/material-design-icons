import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocationOnElement
 * @class IconRoundLocationOnElement
 * @extends {AoflElement}
 */
class IconRoundLocationOnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-location-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocationOnElement.is, IconRoundLocationOnElement);

export default IconRoundLocationOnElement;
