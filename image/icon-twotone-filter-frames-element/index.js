import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterFramesElement
 * @class IconTwotoneFilterFramesElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterFramesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterFramesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-frames';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterFramesElement.is, IconTwotoneFilterFramesElement);

export default IconTwotoneFilterFramesElement;
