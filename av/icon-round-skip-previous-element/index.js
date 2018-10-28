import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSkipPreviousElement
 * @class IconRoundSkipPreviousElement
 * @extends {AoflElement}
 */
class IconRoundSkipPreviousElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSkipPreviousElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-skip-previous';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSkipPreviousElement.is, IconRoundSkipPreviousElement);

export default IconRoundSkipPreviousElement;
