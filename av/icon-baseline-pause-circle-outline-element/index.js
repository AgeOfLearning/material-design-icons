import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePauseCircleOutlineElement
 * @class IconBaselinePauseCircleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselinePauseCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePauseCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pause-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePauseCircleOutlineElement.is, IconBaselinePauseCircleOutlineElement);

export default IconBaselinePauseCircleOutlineElement;
