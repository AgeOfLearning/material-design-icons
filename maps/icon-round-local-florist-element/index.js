import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalFloristElement
 * @class IconRoundLocalFloristElement
 * @extends {AoflElement}
 */
class IconRoundLocalFloristElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalFloristElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-florist';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalFloristElement.is, IconRoundLocalFloristElement);

export default IconRoundLocalFloristElement;
