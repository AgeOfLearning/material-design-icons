import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFindReplaceElement
 * @class IconRoundFindReplaceElement
 * @extends {AoflElement}
 */
class IconRoundFindReplaceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFindReplaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-find-replace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFindReplaceElement.is, IconRoundFindReplaceElement);

export default IconRoundFindReplaceElement;
