import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHdElement
 * @class IconRoundHdElement
 * @extends {AoflElement}
 */
class IconRoundHdElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hd';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHdElement.is, IconRoundHdElement);

export default IconRoundHdElement;
