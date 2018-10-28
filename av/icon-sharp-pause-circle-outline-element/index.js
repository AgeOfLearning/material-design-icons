import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPauseCircleOutlineElement
 * @class IconSharpPauseCircleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpPauseCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPauseCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pause-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPauseCircleOutlineElement.is, IconSharpPauseCircleOutlineElement);

export default IconSharpPauseCircleOutlineElement;
