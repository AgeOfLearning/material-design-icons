import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDraftsElement
 * @class IconRoundDraftsElement
 * @extends {AoflElement}
 */
class IconRoundDraftsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDraftsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-drafts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDraftsElement.is, IconRoundDraftsElement);

export default IconRoundDraftsElement;
