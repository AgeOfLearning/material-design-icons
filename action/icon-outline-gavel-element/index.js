import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGavelElement
 * @class IconOutlineGavelElement
 * @extends {AoflElement}
 */
class IconOutlineGavelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGavelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gavel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGavelElement.is, IconOutlineGavelElement);

export default IconOutlineGavelElement;
