import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShareElement
 * @class IconTwotoneShareElement
 * @extends {AoflElement}
 */
class IconTwotoneShareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShareElement.is, IconTwotoneShareElement);

export default IconTwotoneShareElement;
