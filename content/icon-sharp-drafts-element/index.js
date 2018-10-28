import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDraftsElement
 * @class IconSharpDraftsElement
 * @extends {AoflElement}
 */
class IconSharpDraftsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDraftsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-drafts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDraftsElement.is, IconSharpDraftsElement);

export default IconSharpDraftsElement;
