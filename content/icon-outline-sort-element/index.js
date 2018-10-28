import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSortElement
 * @class IconOutlineSortElement
 * @extends {AoflElement}
 */
class IconOutlineSortElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSortElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sort';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSortElement.is, IconOutlineSortElement);

export default IconOutlineSortElement;
