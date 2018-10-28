import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpaElement
 * @class IconTwotoneSpaElement
 * @extends {AoflElement}
 */
class IconTwotoneSpaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-spa';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpaElement.is, IconTwotoneSpaElement);

export default IconTwotoneSpaElement;
