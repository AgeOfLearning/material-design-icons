import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePauseCircleFilledElement
 * @class IconTwotonePauseCircleFilledElement
 * @extends {AoflElement}
 */
class IconTwotonePauseCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePauseCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pause-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePauseCircleFilledElement.is, IconTwotonePauseCircleFilledElement);

export default IconTwotonePauseCircleFilledElement;
