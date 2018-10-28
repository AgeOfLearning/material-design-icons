import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCollectionsElement
 * @class IconRoundCollectionsElement
 * @extends {AoflElement}
 */
class IconRoundCollectionsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCollectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-collections';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCollectionsElement.is, IconRoundCollectionsElement);

export default IconRoundCollectionsElement;
