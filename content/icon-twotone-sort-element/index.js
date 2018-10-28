import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSortElement
 * @class IconTwotoneSortElement
 * @extends {AoflElement}
 */
class IconTwotoneSortElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSortElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sort';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSortElement.is, IconTwotoneSortElement);

export default IconTwotoneSortElement;
