import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewQuiltElement
 * @class IconTwotoneViewQuiltElement
 * @extends {AoflElement}
 */
class IconTwotoneViewQuiltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewQuiltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-quilt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewQuiltElement.is, IconTwotoneViewQuiltElement);

export default IconTwotoneViewQuiltElement;
