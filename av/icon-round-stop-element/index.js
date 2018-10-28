import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStopElement
 * @class IconRoundStopElement
 * @extends {AoflElement}
 */
class IconRoundStopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-stop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStopElement.is, IconRoundStopElement);

export default IconRoundStopElement;
