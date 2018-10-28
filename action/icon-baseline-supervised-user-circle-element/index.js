import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSupervisedUserCircleElement
 * @class IconBaselineSupervisedUserCircleElement
 * @extends {AoflElement}
 */
class IconBaselineSupervisedUserCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSupervisedUserCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-supervised-user-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSupervisedUserCircleElement.is, IconBaselineSupervisedUserCircleElement);

export default IconBaselineSupervisedUserCircleElement;
