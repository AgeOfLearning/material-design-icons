import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGavelElement
 * @class IconTwotoneGavelElement
 * @extends {AoflElement}
 */
class IconTwotoneGavelElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGavelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gavel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGavelElement.is, IconTwotoneGavelElement);

export default IconTwotoneGavelElement;
