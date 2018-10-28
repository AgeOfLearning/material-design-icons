import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHorizontalSplitElement
 * @class IconSharpHorizontalSplitElement
 * @extends {AoflElement}
 */
class IconSharpHorizontalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHorizontalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-horizontal-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHorizontalSplitElement.is, IconSharpHorizontalSplitElement);

export default IconSharpHorizontalSplitElement;
