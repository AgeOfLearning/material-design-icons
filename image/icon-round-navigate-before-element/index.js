import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNavigateBeforeElement
 * @class IconRoundNavigateBeforeElement
 * @extends {AoflElement}
 */
class IconRoundNavigateBeforeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNavigateBeforeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-navigate-before';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNavigateBeforeElement.is, IconRoundNavigateBeforeElement);

export default IconRoundNavigateBeforeElement;
