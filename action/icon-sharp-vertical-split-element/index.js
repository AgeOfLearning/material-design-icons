import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVerticalSplitElement
 * @class IconSharpVerticalSplitElement
 * @extends {AoflElement}
 */
class IconSharpVerticalSplitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVerticalSplitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vertical-split';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVerticalSplitElement.is, IconSharpVerticalSplitElement);

export default IconSharpVerticalSplitElement;
