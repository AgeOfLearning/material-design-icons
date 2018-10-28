import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSkipNextElement
 * @class IconRoundSkipNextElement
 * @extends {AoflElement}
 */
class IconRoundSkipNextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSkipNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-skip-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSkipNextElement.is, IconRoundSkipNextElement);

export default IconRoundSkipNextElement;
