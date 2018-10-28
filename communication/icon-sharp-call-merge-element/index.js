import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallMergeElement
 * @class IconSharpCallMergeElement
 * @extends {AoflElement}
 */
class IconSharpCallMergeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallMergeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-merge';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallMergeElement.is, IconSharpCallMergeElement);

export default IconSharpCallMergeElement;
