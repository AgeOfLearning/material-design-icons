import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePauseCircleFilledElement
 * @class IconOutlinePauseCircleFilledElement
 * @extends {AoflElement}
 */
class IconOutlinePauseCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePauseCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pause-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePauseCircleFilledElement.is, IconOutlinePauseCircleFilledElement);

export default IconOutlinePauseCircleFilledElement;
