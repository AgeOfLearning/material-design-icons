import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPauseCircleOutlineElement
 * @class IconRoundPauseCircleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundPauseCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPauseCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pause-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPauseCircleOutlineElement.is, IconRoundPauseCircleOutlineElement);

export default IconRoundPauseCircleOutlineElement;
