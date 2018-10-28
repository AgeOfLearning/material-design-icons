import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPauseCircleFilledElement
 * @class IconSharpPauseCircleFilledElement
 * @extends {AoflElement}
 */
class IconSharpPauseCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPauseCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pause-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPauseCircleFilledElement.is, IconSharpPauseCircleFilledElement);

export default IconSharpPauseCircleFilledElement;
