import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddLocationElement
 * @class IconRoundAddLocationElement
 * @extends {AoflElement}
 */
class IconRoundAddLocationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddLocationElement.is, IconRoundAddLocationElement);

export default IconRoundAddLocationElement;
