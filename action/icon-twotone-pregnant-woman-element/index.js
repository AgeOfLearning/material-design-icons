import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePregnantWomanElement
 * @class IconTwotonePregnantWomanElement
 * @extends {AoflElement}
 */
class IconTwotonePregnantWomanElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePregnantWomanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pregnant-woman';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePregnantWomanElement.is, IconTwotonePregnantWomanElement);

export default IconTwotonePregnantWomanElement;
