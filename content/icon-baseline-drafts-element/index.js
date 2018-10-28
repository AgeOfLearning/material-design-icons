import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDraftsElement
 * @class IconBaselineDraftsElement
 * @extends {AoflElement}
 */
class IconBaselineDraftsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDraftsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-drafts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDraftsElement.is, IconBaselineDraftsElement);

export default IconBaselineDraftsElement;
