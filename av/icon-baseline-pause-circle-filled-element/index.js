import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePauseCircleFilledElement
 * @class IconBaselinePauseCircleFilledElement
 * @extends {AoflElement}
 */
class IconBaselinePauseCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePauseCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pause-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePauseCircleFilledElement.is, IconBaselinePauseCircleFilledElement);

export default IconBaselinePauseCircleFilledElement;
