import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPauseCircleFilledElement
 * @class IconRoundPauseCircleFilledElement
 * @extends {AoflElement}
 */
class IconRoundPauseCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPauseCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pause-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPauseCircleFilledElement.is, IconRoundPauseCircleFilledElement);

export default IconRoundPauseCircleFilledElement;
