import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePregnantWomanElement
 * @class IconOutlinePregnantWomanElement
 * @extends {AoflElement}
 */
class IconOutlinePregnantWomanElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePregnantWomanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pregnant-woman';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePregnantWomanElement.is, IconOutlinePregnantWomanElement);

export default IconOutlinePregnantWomanElement;
