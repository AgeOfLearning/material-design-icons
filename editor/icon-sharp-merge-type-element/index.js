import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMergeTypeElement
 * @class IconSharpMergeTypeElement
 * @extends {AoflElement}
 */
class IconSharpMergeTypeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMergeTypeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-merge-type';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMergeTypeElement.is, IconSharpMergeTypeElement);

export default IconSharpMergeTypeElement;
