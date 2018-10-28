import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFindReplaceElement
 * @class IconSharpFindReplaceElement
 * @extends {AoflElement}
 */
class IconSharpFindReplaceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFindReplaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-find-replace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFindReplaceElement.is, IconSharpFindReplaceElement);

export default IconSharpFindReplaceElement;
