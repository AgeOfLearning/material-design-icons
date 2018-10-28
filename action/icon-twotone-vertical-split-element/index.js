import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVerticalSplitElement
 * @class IconTwotoneVerticalSplitElement
 * @extends {AoflElement}
 */
class IconTwotoneVerticalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVerticalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-vertical-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVerticalSplitElement.is, IconTwotoneVerticalSplitElement);

export default IconTwotoneVerticalSplitElement;
