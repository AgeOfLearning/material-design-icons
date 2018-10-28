import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMicNoneElement
 * @class IconBaselineMicNoneElement
 * @extends {AoflElement}
 */
class IconBaselineMicNoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMicNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mic-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMicNoneElement.is, IconBaselineMicNoneElement);

export default IconBaselineMicNoneElement;
