import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOndemandVideoElement
 * @class IconBaselineOndemandVideoElement
 * @extends {AoflElement}
 */
class IconBaselineOndemandVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOndemandVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-ondemand-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOndemandVideoElement.is, IconBaselineOndemandVideoElement);

export default IconBaselineOndemandVideoElement;
