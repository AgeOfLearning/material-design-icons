import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDiscFullElement
 * @class IconOutlineDiscFullElement
 * @extends {AoflElement}
 */
class IconOutlineDiscFullElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDiscFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-disc-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDiscFullElement.is, IconOutlineDiscFullElement);

export default IconOutlineDiscFullElement;
