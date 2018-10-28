import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFindInPageElement
 * @class IconRoundFindInPageElement
 * @extends {AoflElement}
 */
class IconRoundFindInPageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFindInPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-find-in-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFindInPageElement.is, IconRoundFindInPageElement);

export default IconRoundFindInPageElement;
