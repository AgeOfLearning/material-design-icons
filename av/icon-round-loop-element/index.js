import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLoopElement
 * @class IconRoundLoopElement
 * @extends {AoflElement}
 */
class IconRoundLoopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLoopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-loop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLoopElement.is, IconRoundLoopElement);

export default IconRoundLoopElement;
