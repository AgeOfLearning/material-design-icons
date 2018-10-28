import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLoopElement
 * @class IconTwotoneLoopElement
 * @extends {AoflElement}
 */
class IconTwotoneLoopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLoopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-loop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLoopElement.is, IconTwotoneLoopElement);

export default IconTwotoneLoopElement;
